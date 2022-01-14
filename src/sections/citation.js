/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text, Textarea } from "theme-ui";
import SectionHeader from "components/section-header";
import src from "constants/src.data";

const cite =
  "Goldin, C. D., & Katz, L. F. (2008). The race between education and technology. Belknap Press of Harvard University Press. Matthews, G., Smith, Y., & Knowles, G. (2009). Disaster management in archives, libraries and museums. Ashgate.";

export default function Citation() {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          sx={styles.SectionHeader}
          slogan="Citation"
          title="This is how you can cite us"
          isWhite={true}
        />

        <Textarea sx={styles.Textarea} defaultValue={cite} rows={3} />
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${src.PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],
  },
  Textarea: {
    color: "white",
    fontSize: 5,
    backgroundColor: "rgba(0,153,255, 0.1)",
    fontFamily: "Roboto",
  },
  SectionHeader: {
    marginTop: "0px",
  },
};
