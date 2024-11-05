import { Box, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';

interface RecipeCardProps {
  title: string;
  description: string;
  prepTime: string;
  bakeTime: string;
  totalTime: string;
  yield: string;
  imageUrl: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, prepTime, bakeTime, totalTime, yield: yieldData, imageUrl }) => (
  <Box display="flex" flexDirection="row" gap={4} mt={2}>
    <Box flex={1}>
      <Typography variant="overline">RECIPES {'>'} BREAD {'>'} QUICK BREAD</Typography>
      <Typography variant="h3" component="h1" mt={1} fontWeight="bold">
        {title}
      </Typography>
      <Typography variant="body1" mt={2}>
        {description}
      </Typography>

      <Stack direction="row" spacing={3} mt={3}>
        <Stack>
          <Typography variant="body2">PREP</Typography>
          <Typography variant="body1">{prepTime}</Typography>
        </Stack>
        <Stack>
          <Typography variant="body2">BAKE</Typography>
          <Typography variant="body1">{bakeTime}</Typography>
        </Stack>
        <Stack>
          <Typography variant="body2">TOTAL</Typography>
          <Typography variant="body1">{totalTime}</Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} mt={3}>
        <Typography variant="body2">YIELD</Typography>
        <Typography variant="body1">{yieldData}</Typography>
      </Stack>

      <Stack direction="row" spacing={2} mt={3}>
        <Button variant="outlined">Save Recipe</Button>
        <Button variant="outlined">Print</Button>
      </Stack>
    </Box>

    <Box flex={1}>
      <Image src={imageUrl} alt={title} width={500} height={400} />
    </Box>
  </Box>
);

export default RecipeCard;
