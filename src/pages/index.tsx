// src/pages/index.tsx
import { Typography, Box } from '@mui/material';
import { GetServerSideProps } from 'next';

type HomePageProps = {
  content: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/data?page=home`);
  const data = await res.json();
  return { props: { content: data.content } };
};

export default function Home({ content }: HomePageProps) {
  return (
    <Box>
      <Typography variant="h4">Welcome to My Website</Typography>
      <Typography variant="body1">{content}</Typography>
    </Box>
  );
}
