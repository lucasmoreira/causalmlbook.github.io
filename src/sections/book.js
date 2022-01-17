import Card from "components/card.js";
import { Container, Heading, Text, Button, Link } from "theme-ui";
import SectionHeader from "components/section-header";
import src from "constants/src.data";
import chapters from "constants/toc.data";

export default function Book() {
  const TOC = chapters.map(function (chapter) {
    return (
      <Card>
        <li className="parentListItem">
          {chapter.link ? (
            <Link href={chapter.link}>
              <Heading>{chapter.title}</Heading>
            </Link>
          ) : (
            <Heading>{chapter.title}</Heading>
          )}
          {chapter.children &&
            chapter.children.map(function (child) {
              return (
                <li className="childListItem">
                  <Link href={child.link}>
                    <Text className="chapterNumber">{child.number}</Text>
                    {child.prefix && (
                      <Text as="p" className={child.prefix[0].split(" ")[0]}>
                        {child.prefix[0] + " " + child.prefix[1]}
                      </Text>
                    )}
                    <Text className="title">{child.title}</Text>
                  </Link>
                </li>
              );
            })}
        </li>
      </Card>
    );
  });
  return (
    <section id="book" sx={{ variant: "section.book" }}>
      <Container>
        <SectionHeader
          slogan="Book"
          title="Applied Causal Inference Powered by ML and AI"
        />
        <Link href={src.TestPDF} sx={{ textDecoration: "none" }}>
          <Button
            sx={styles.BookBtn}
            variant="secondary"
            aria-label="To The Book"
          >
            Full Book PDF
          </Button>
        </Link>
      </Container>

      <Container sx={styles.tableofcontents}>
        <ul>{TOC}</ul>
      </Container>
    </section>
  );
}

const styles = {
  tableofcontents: {
    width: "100%",
    mb: 7,
    pr: [4, null, null, null, null, null, 6],

    ".parentListItem": {
      a: { textDecoration: "none" },
      ".childListItem": {
        my: 4,
        a: {
          display: "grid",
          gridTemplateColumns: "4em 1fr",
          justifyItems: "start",
          alignItems: "center",
          lineHeight: "1.5em",
          gridGap: "0px",
          color: "text",
          fontSize: 2,
          textDecoration: "none",
          "&:hover": {
            backgroundColor: "tocHover",
            borderRadius: "30px",
          },
        },
        ".chapterNumber": {
          gridRow: "1 / 3",
          gridColumn: "1",
          fontSize: 8,
          textAlign: "right",
          width: "2.5em",
          pr: "1em",
          fontWeight: 700,
          "&:after": {
            content: "''",
            backgroundColor: "text",
            width: "1px",
            height: "1.5em",
            position: "absolute",
            ml: "0.5em",
            mt: "-0.4em",
          },
        },
        ".Causal, .Predictive": {
          gridColumn: "2",
          gridRow: "1",
          fontSize: "13px",
          letterSpacing: "1px",
          textTransform: "uppercase",
          fontWeight: 700,
          ml: "1rem",
        },
        ".Causal": { color: "causal" },
        ".Predictive": { color: "predictive" },

        ".title": {
          ml: "1rem",
          gridColumn: "2",
          gridRow: "2",
          fontSize: [1, 2, 3],
          fontWeight: 500,
        },
      },
    },
    ul: {
      listStyle: "none",
      pl: 0,
    },
  },
  BookBtn: {
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    mb: 5,
    mt: 0,
    borderColor: "primary",
    color: "primary",
    "&:hover": {
      boxShadow: "rgba(31, 62, 118, 0.57) 0px 9px 20px -5px",
      background: "primary",
      background:
        "linear-gradient(40deg, rgba(3,8,48,1) 0%, rgba(9,31,111,1) 53%, rgba(16,65,141,1) 100%)",
      color: "white",
    },
  },
};
