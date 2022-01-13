import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme/theme";
import Layout from "components/layout";
import SEO from "components/seo";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="CausalML Book" />
          <div>
            <h1>Hello World</h1>
          </div>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
