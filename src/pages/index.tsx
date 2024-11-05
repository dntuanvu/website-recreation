import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/recipes/1',
      permanent: false, 
    },
  };
};

export default function Home() {
  return null;
}
