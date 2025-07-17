export interface StartupTypeCard {
  _id: number;
  _createAt: Date;
  views: number;
  author: { _id: string; name: string; image: string; bio: string };
  description: string;
  image: string;
  category: string;
  title: string;
}
