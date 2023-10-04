import axios from "axios";
import { updateUser } from "@/services/users";
import { UsersAdmin } from "../../src/components/UsersAdmin/UsersAdmin";
import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UsersModal from "../../src/components/UsersAdmin/UsersModal";
import UserMother from "../backoffice/users/__mothers__/user.mother";
import { ResizeObserverMock } from "../backoffice/resizeObserver";
import { describe, expect, test, vi } from "vitest";

describe("User Modal", () => {
  const resize = ResizeObserverMock;
  test("submit update user with success notification", async () => {
    // given
    const userClicked = UserMother.random();
    axios.patch = vi.fn().mockResolvedValue({
      data: userClicked,
      status: 200,
    });
    // when
    render(
      <>
        <UsersAdmin />
        <UsersModal
          user={userClicked}
          modalVisible={"size"}
          closedModal={() => {}}
          setRefresh={() => {}}
        ></UsersModal>
      </>
    );
    userClicked.mail = "test@mail.com";
    const updatedUser = await updateUser(userClicked);

    // then
    await waitFor(() => {
      expect(axios.patch).toHaveBeenCalledWith(
        `${import.meta.env.PUBLIC_API_URL}/user/${userClicked.id}`,
        {
          name: userClicked.name,
          mail: userClicked.mail,
        }
      );
      // expect(updatedUser.data).toStrictEqual(userClicked);
    });
  });

  test("should render modal", () => {
    //  given
    const newUser = UserMother.random();
    // when
    render(
      <UsersModal
        user={newUser}
        modalVisible={"size"}
        closedModal={() => {}}
        setRefresh={() => {}}
      ></UsersModal>
    );
    const inputEmail = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;
    // then
    expect(inputEmail.value).toBe(newUser.mail);
  });

  test("should render user info", () => {
    // given
    const userClicked = UserMother.random();

    // when
    render(
      <UsersModal
        user={userClicked}
        modalVisible={"size"}
        closedModal={() => {}}
        setRefresh={() => {}}
      ></UsersModal>
    );
    const inputEmail = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;
    // then
    expect(inputEmail.value).toBe(userClicked.mail);
  });

  test("should render modal's charts tab", async () => {
    // given
    const userClicked = UserMother.random();
    // when
    render(
      <UsersModal
        user={userClicked}
        modalVisible={"size"}
        closedModal={() => {}}
        setRefresh={() => {}}
      ></UsersModal>
    );
    const chartBtn = screen.getByText(/chart/i);
    await userEvent.click(chartBtn);
    // then
    expect(screen.getByText(/Chart goes here/i)).toBeDefined();
  });

  test("should render modal's audits tab", async () => {
    // given
    const userClicked = UserMother.random();
    // when
    render(
      <UsersModal
        user={userClicked}
        modalVisible={"size"}
        closedModal={() => {}}
        setRefresh={() => {}}
      ></UsersModal>
    );
    const chartBtn = screen.getByText(/Audit/i);
    await userEvent.click(chartBtn);
    // then
    expect(screen.getByText(/Users Actions/i)).toBeDefined();
  });
});
