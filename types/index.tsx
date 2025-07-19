export interface Author {
  _id: number;
  name: string;
  username: string;
  image: string;
  email:string,
  bio:string
}

export interface StartupTypeCard {
  _id: number;
  _createAt: Date;
  views: number;
  author: Author;
  description: string;
  image: string;
  category: string;
  title: string;
  patch:string
}



