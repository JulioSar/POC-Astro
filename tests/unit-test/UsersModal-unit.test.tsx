import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UsersModal from "../../src/components/UsersAdmin/UsersModal";
import UserMother from "../backoffice/users/__mothers__/user.mother";
import { describe, expect, test, vi } from "vitest";
import userService from "@/services/users";
import { ResizeObserverMock } from "../backoffice/resizeObserver";

describe("User Modal", () => {
  const resize = ResizeObserverMock;

  const user = UserMother.random();
  const userProps = {
    userId: user.id,
    setUserId: vi.fn(),
  };
  const modalProps = {
    openModal: "size",
    setOpenModal: vi.fn(),
  };

  test("should render modal", async () => {
    //  given
    const spy = vi.spyOn(userService, "getOne").mockResolvedValue(user);

    // when

    render(<UsersModal userProps={userProps} modalProps={modalProps} />);
    const inputEmail = screen.getByText(/Edit name/i);
    // then
    expect(inputEmail).toBeDefined();
  });

  test("should render user info", async () => {
    // given
    const spy = vi.spyOn(userService, "getOne").mockResolvedValue(user);

    // when
    render(<UsersModal userProps={userProps} modalProps={modalProps} />);

    const profileBtn = screen.getByText(/profile/i);
    await userEvent.click(profileBtn);
    const inputEmail = screen.getByPlaceholderText(
      /email/i
    ) as HTMLInputElement;
    // then

    expect(inputEmail.value).toBe(user.mail);
  });

  test("should render modal's charts tab", async () => {
    // given
    const spy = vi.spyOn(userService, "getOne").mockResolvedValue(user);

    // when
    render(<UsersModal userProps={userProps} modalProps={modalProps} />);
    const chartBtn = screen.getByText(/chart/i);
    await userEvent.click(chartBtn);
    // then
    expect(screen.getByText(/Chart goes here/i)).toBeDefined();
  });

  test("should render modal's audits tab", async () => {
    // given
    const spy = vi.spyOn(userService, "getOne").mockResolvedValue(user);

    // when
    render(<UsersModal userProps={userProps} modalProps={modalProps} />);
    const chartBtn = screen.getByText(/Audit/i);
    await userEvent.click(chartBtn);
    // then
    expect(screen.getByText(/Users Actions/i)).toBeDefined();
  });
});
