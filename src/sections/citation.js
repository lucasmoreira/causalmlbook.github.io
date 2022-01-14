/** @jsxImportSource theme-ui */
import { jsx } from "theme-ui";
import { Container, Grid, Box, Heading, Text, Textarea } from "theme-ui";
import SectionHeader from "components/section-header";
import src from "constants/src.data";

const cite =
  "Chernozhuko, V. & Hansen, C. & Spindler, M. & Syrgkanis, V. (2022): Applied Causal Inference Powered by ML and AI";

export default function Citation() {
  return (
    <section sx={styles.workflow}>
      <Container sx={{}}>
        <SectionHeader
          sx={styles.SectionHeader}
          slogan="Citation"
          title="This is how you can cite us"
          isWhite={true}
        />

        <Textarea
          sx={styles.Textarea}
          defaultValue={cite}
          rows={3}
          readOnly={true}
        />
      </Container>
    </section>
  );
}

const styles = {
  workflow: {
    backgroundColor: "primary",
    backgroundImage: `url(${src.BannerBG})`,
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
    fontWeight: 300,
    width: "80%",
    height: "100%",
    display: "block",
    mr: "auto",
    ml: "auto",
    resize: "none",
    borderRadius: "20px",
    borderColor: "secondary",
    borderWidth: "2px",
  },
  SectionHeader: {
    marginTop: "0px",
  },
};
