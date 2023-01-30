export interface IUser {
  name: string;
  email: string;
  slug: string;
  image: IImage;
  cover: IImage;
}

export interface IImage {
  id: string;
  url: string;
  width: string;
  height: string;
}
