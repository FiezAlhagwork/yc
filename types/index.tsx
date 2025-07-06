export interface StartupTypeCard {
  _id: number;
  _createAt: Date;
  views: number;
  author: { authorId: number; name: string };
  description: string;
  image: string;
  category: string;
  title: string;
}
