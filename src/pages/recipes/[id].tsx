import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '@/src/components/Layout/Layout';
import RecipeCard from '@/src/components/Layout/RecipeCard';

type RecipePageProps = {
  recipe: {
    id: string;
    title: string;
    description: string;
    prepTime: string;
    bakeTime: string;
    totalTime: string;
    yield: string;
    imageUrl: string;
  };
};

// Mock data
const recipes = [
  {
    id: '1',
    title: 'Whole-Grain Banana Bread',
    description:
      'This one-bowl banana bread  - our 2018 Recipe of the Year - uses the simplest ingredients, but is incredibly moist and flavorful. While the recipe calls for a 50/50 mix of flours (all-purpose and whole wheat), we often make the bread 100% whole wheat, and honestly? No one can tell, it\'s that good! And not only is this bread delicious - it\'s versatile.',
    prepTime: '10 mins',
    bakeTime: '1 hr to 1 hr 15 mins',
    totalTime: '1 hr 10 mins',
    yield: '1 loaf, 12 generous servings',
    imageUrl: '/images/banana-bread.png',
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = recipes.map((recipe) => ({
    params: { id: recipe.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const recipe = recipes.find((recipe) => recipe.id === id);

  return {
    props: { recipe },
  };
};

const RecipePage: React.FC<RecipePageProps> = ({ recipe }) => (
  <Layout>
    <RecipeCard
      title={recipe.title}
      description={recipe.description}
      prepTime={recipe.prepTime}
      bakeTime={recipe.bakeTime}
      totalTime={recipe.totalTime}
      yield={recipe.yield}
      imageUrl={recipe.imageUrl}
    />
  </Layout>
);

export default RecipePage;
