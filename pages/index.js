import Link from "next/link";
import fs from "fs";

const Home = ({ chapters }) => (
  <div>
    chapters:
    {chapters.map((chapter) => {
      return (
        <div key={chapter}>
          <Link href={"/chapters/" + chapter}>
            <a>{"/chapters/" + chapter}</a>
          </Link>
        </div>
      );
    })}
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("html-chapters");
  return {
    props: {
      chapters: files.map((filename) => filename.replace(".md", "")),
    },
  };
};

export default Home;
