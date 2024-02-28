import { faker } from "@faker-js/faker";

faker.seed(99);

export const users = [...Array(20)].map(() => ({
  userId: faker.string.uuid(),
  userName: faker.person.fullName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  phone: faker.phone.number(),
  domain: faker.internet.url({ protocol: "http", appendSlash: false }),
  isFavorite: false,
}));
