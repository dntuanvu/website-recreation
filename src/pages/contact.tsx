import { Typography, Box, TextField, Button } from '@mui/material';

export default function Contact() {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Typography variant="h4">Contact Us</Typography>
      <TextField label="Your Name" variant="outlined" fullWidth margin="normal" />
      <TextField label="Email" variant="outlined" fullWidth margin="normal" />
      <TextField label="Message" variant="outlined" multiline rows={4} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Send</Button>
    </Box>
  );
}
