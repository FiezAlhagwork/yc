// import StartupCard from "@/components/StartupCard";
// import SearchForm from "../../components/SearchForm";

export interface StartupTypeCard {
  _id: number;
  _createAt: Date;
  views: number;
  author: {authorId: number; name: string };
  description: string;
  image: string;
  category: string;
  title: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id:1213,
      _createAt: new Date(),
      views: 55,
      author: { authorId: 1, name: "fiez" },
      description: "This is a  ",
      image: "",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        {/* <SearchForm query={query} /> */}
      </section>

      <section className="section_container">
        <p className=" text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
            //   <StartupCard key={post._id} post={post} />
            <></>
            ))
          ) : (
            <p className="no-results"> No startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}