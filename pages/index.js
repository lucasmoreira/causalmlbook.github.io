import Link from "next/link";
import { Typography } from "@mui/material";
import fs from "fs";

const Home = ({ chapters, timestamp }) => {
  return (
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
      <Typography variant="body">Last update: {timestamp}</Typography>
    </div>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync("html-chapters");
  return {
    props: {
      chapters: files.map((filename) => filename.replace(".md", "")),
      timestamp: Date(),
    },
  };
};

export default Home;
