/** @jsxImportSource theme-ui */
import {
  Container,
  Heading,
  Text,
  Box,
  Image,
  Button,
  Link,
  Divider,
} from "theme-ui";
import SectionHeader from "components/section-header";
import ButtonGroup from "components/button-group";
import Carousel from "react-multi-carousel";
import src from "constants/src.data";

const data = [
  {
    id: 1,
    title: "DML for Conditional Average Treatment Effect",
    description:
      "This is a simple demonstration of Debiased Machine Learning estimator for the Conditional Average Treatment Effect. Goal is to estimate the effect of 401(k) eligibility on net financial assets for each value of income",
    site: src.Kaggle,
    lab: src.R,
    link: "https://www.kaggle.com/victorchernozhukov/dml-for-conditional-average-treatment-effect?scriptVersionId=66048820",
  },
  {
    id: 2,
    title: "DML for ATE and LATE of 401(k) on Wealth",
    description:
      "As a practical illustration of the methods developed in this lecture, we consider estimation of the effect of 401(k) eligibility and participation on accumulated assets. 401(k) plans are pension accounts sponsored by employers.",
    site: src.Colab,
    lab: src.Python,
    link: "https://www.kaggle.com/janniskueck/dml-for-ate-and-late-of-401-k-on-wealth?scriptVersionId=57642758",
  },
  {
    id: 3,
    title: "DML inference for gun ownership",
    description:
      "A Case Study: The Effect of Gun Ownership on Gun-Homicide Rates. Since our goal is to estimate the effect of gun ownership after controlling for a rich set county characteristics, we next include the controls.",
    site: src.Kaggle,
    lab: src.Python,
    link: "https://www.kaggle.com/janniskueck/dml-inference-for-gun-ownership",
  },
  {
    id: 4,
    title: "OLS and lasso for gender wage gap inference",
    description:
      "What is the difference in predicted wages between men and women with the same job-relevant characteristics?",
    site: src.Colab,
    lab: src.R,
    link: "https://www.kaggle.com/janniskueck/ols-and-lasso-for-gender-wage-gap-inference",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function Notebooks() {
  return (
    <section id="labs" sx={{ variant: "section.notebooks" }}>
      <Container sx={{ my: 8 }}>
        <SectionHeader slogan="Notebooks" title="Take a look at our Labs" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="carousel-container"
          customButtonGroup={<ButtonGroup />}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
        >
          {data.map((item) => (
            <Link href={item.link} sx={styles.Link}>
              <Box sx={styles.Notebook} key={`notebook--key${item.id}`}>
                <Heading as="h3" sx={styles.title}>
                  {item.title}
                </Heading>
                <Divider />
                <Text sx={styles.description}>{item.description}</Text>
                <Divider />
                <div className="card-footer">
                  <div className="image">
                    <Image src={item.site} alt="Client Image" />
                  </div>
                  <div className="image">
                    <Image sx={styles.LabLogo} src={item.lab} />
                  </div>
                </div>
              </Box>
            </Link>
          ))}
        </Carousel>
      </Box>
      <Button
        sx={styles.NotebooksBtn}
        variant="secondary"
        aria-label="View all notebooks"
      >
        View all notebooks
      </Button>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-35px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: [
        "100%",
        null,
        null,
        "750px",
        "1000px",
        "1180px",
        null,
        "calc(50% + 865px)",
      ],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s",
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1,
        },
      },
    },
  },
  Notebook: {
    boxShadow: "0px 0px 3px rgba(38, 78, 118, 0.25)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: [
      "30px 20px 10px",
      "30px 25px 10px",
      "30px 20px 10px",
      "35px 30px 10px 40px",
      "30px 30px 10px",
      "35px 30px 10px 40px",
    ],
    bg: "white",
    textAlign: "left",
    m: [
      "28px 5px 30px 5px",
      "28px 20px 30px 20px",
      "28px 15px 30px 15px",
      "28px 15px 30px 15px",
      "30px 20px 40px",
    ],
    "&:hover": {
      boxShadow: "0px 6px 37px rgba(38, 78, 118, 0.15)",
    },
    ".footer-container": {},
    ".card-footer": {
      display: "grid",
      gridTemplateColumns: "50% 50%",
      mr: "auto",
      ml: "auto",
      alignItems: "center",
      pb: 0,
      mt: 2,
      ".image": {
        textAlign: "center",
        img: {
          width: "45px",
          height: "45px",
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3,
  },
  designation: {
    color: "#25A0FF",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4,
  },
  Link: {
    textDecoration: "none",
  },
  NotebooksBtn: {
    display: "block",
    marginRight: "auto",
    marginLeft: "auto",
    mb: 0,
    mt: 5,
    borderColor: "primary",
    color: "primary",
    "&:hover": {
      boxShadow: "rgba(31, 62, 118, 0.57) 0px 9px 20px -5px",
      backgroundColor: "primary",
      color: "white",
    },
  },
};
