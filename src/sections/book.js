import Card from "components/card.js";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Button,
  Divider,
  Link,
  Label,
} from "theme-ui";
import SectionHeader from "components/section-header";

export default function Book() {
  return (
    <section id="book" sx={{ variant: "section.book" }}>
      <Container>
        <SectionHeader
          slogan="Book"
          title="Applied Causal Inference Powered by ML and AI"
        />
        <Button
          sx={styles.BookBtn}
          variant="secondary"
          aria-label="To The Book"
        >
          Full Book PDF
        </Button>
      </Container>

      <Divider />
      <Container sx={styles.tableofcontents}>
        <ul>
          <Card>
            <li>
              <Link href="/">
                <Heading>Preface</Heading>
              </Link>
            </li>
          </Card>
          <Card>
            <li>
              <Link>
                <Heading>Core Material</Heading>
              </Link>
              <ul>
                <li>
                  <Text sx={styles.Span}>1</Text>
                  <Link href="/">
                    <Text variant="predictive">Predictive Inference</Text> 1:
                    Linear Regression in Moderately High Dimensions
                  </Link>
                </li>
                <li>
                  <Text sx={styles.Span}>2</Text>
                  <Link href="/">
                    <Text variant="causal">Causal Inference</Text> 1: Randomized
                    Experiments
                  </Link>
                </li>

                <li>
                  <Text sx={styles.Span}>3</Text>
                  <Link href="/">
                    <Text variant="predictive">Predictive Inference</Text> 2(A):
                    Modern High Dimensional Linear Regression
                  </Link>
                </li>
                <li>
                  <Text sx={styles.Span}>4</Text>
                  <Link href="/">
                    <Text variant="causal">Causal Inference</Text> 2(A): Causal
                    Identification via Conditional Exogeneity
                  </Link>
                </li>

                <li>
                  <Text sx={styles.Span}>5</Text>
                  <Link href="/">
                    <Text variant="predictive">Predictive Inference</Text> 2(B):
                    Inference on Predictive and Causal Effects in High
                    Dimensional Linear Regression Models
                  </Link>
                </li>
                <li>
                  <Text sx={styles.Span}>6</Text>
                  <Link href="/">
                    <Text variant="causal">Causal Inference</Text> 2(B):
                    Structural Equations and Conditional Exogeneity
                  </Link>
                </li>
                <li>
                  <Text sx={styles.Span}>7</Text>
                  <Link href="/">
                    <Text variant="predictive">Predictive Inference</Text> 3:
                    Modern High Dimensional Nonlinear Regression
                  </Link>
                </li>
                <li>
                  <Text sx={styles.Span}>8</Text>
                  <Link href="/">
                    <Text variant="causal">Causal Inference</Text> 3: Causal
                    DAGs, Markov Nets, Nonlinear SEMs
                  </Link>
                </li>
                <li>
                  <Text sx={styles.Span}>9</Text>
                  <Link href="/">
                    <Text variant="predictive">Predictive Inference</Text> 4:
                    Debiased ML Inference on Predictive and Causal Effects in
                    Modern Nonlinear Regression Models
                  </Link>
                </li>
                <li>
                  <Text sx={styles.Span}>10</Text>
                  <Link href="/">
                    <Text variant="predictive">Predictive Inference</Text> 5:
                    Feature Engineering With Deep Learning for Causal and
                    Predictive Inference
                  </Link>
                </li>
              </ul>
            </li>
          </Card>
          <Card>
            <li>
              <Link>
                <Heading>Advanced Core Material</Heading>
              </Link>
              <ul>
                <li>
                  <Text sx={styles.Span}>11</Text>
                  <Link href="/">
                    Advanced Core 1: Unobserved Confounders, Instrumental
                    Variables, and Proxy Controls
                  </Link>
                </li>
                <li>
                  <Text sx={styles.Span}>12</Text>
                  <Link href="/">
                    Advanced Core 2: Debiased ML for IV and Proxy Controls
                    Models and Robust DML Inference under Weak Identification
                  </Link>
                </li>
              </ul>
            </li>
          </Card>
          <Card>
            <li>
              <Link>
                <Heading>Topics</Heading>
              </Link>
              <ul>
                <li>
                  <Text sx={styles.Span}>13</Text>
                  <Link href="/">
                    Topic 1: Inference on Heterogeneous Treatment Effects
                  </Link>
                </li>
              </ul>
            </li>
          </Card>
        </ul>
      </Container>
    </section>
  );
}

const styles = {
  tableofcontents: {
    width: "100%",
    lineHeight: 2.3,
    mb: 7,
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    ul: {
      listStyle: "none",
      a: {
        color: "text",
        fontSize: 2,
        fontWeight: 500,
        textDecoration: "none",
        "&:hover": {
          color: "accent",
          fontWeight: 700,
        },
      },
    },
  },
  Span: {
    fontSize: 3,
    fontWeight: 700,
    pr: 3,
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
      backgroundColor: "primary",
      color: "white",
    },
  },
};
