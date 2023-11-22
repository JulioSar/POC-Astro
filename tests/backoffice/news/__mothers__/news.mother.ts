import type { News } from "../../../../src/types";
import { faker, simpleFaker } from "@faker-js/faker";

export default class NewsMother {
  private id: string;
  private title: string;
  private content: string;
  private creation_date: Date;
  private category: [];
  private published: boolean;
  private type: string;
  private news_picture = "";

  constructor() {
    this.id = simpleFaker.string.uuid();
    this.title = faker.string.alpha();
    this.content = faker.internet.email();
    this.creation_date = faker.date.anytime();
    this.category = [];
    this.type = faker.lorem.word();
    this.published = false;
    this.news_picture = faker.image.avatar();
  }

  withId(id: string): NewsMother {
    this.id = id;
    return this;
  }

  withTitle(title: string): NewsMother {
    this.title = title;
    return this;
  }

  withContent(content: string): NewsMother {
    this.content = content;
    return this;
  }

  withCreationDate(creation_date: Date): NewsMother {
    this.creation_date = creation_date;
    return this;
  }

  withCategory(category: []): NewsMother {
    this.category = category;
    return this;
  }

  withType(type: string): NewsMother {
    this.type = type;
    return this;
  }

  withPublished(published: boolean): NewsMother {
    this.published = published;
    return this;
  }

  withNewsPicture(news_picture: string): NewsMother {
    this.news_picture = news_picture;
    return this;
  }

  build(): News {
    return {
      id: this.id,
      title: this.title,
      content: this.content,
      creation_date: this.creation_date,
      category: this.category,
      type: this.type,
      published: this.published,
      news_picture: this.news_picture,
    };
  }

  static random(): News {
    return new NewsMother().build();
  }
}
