"use client";
import { Box, Typography } from "@mui/material";


export function Footer() {

  return <>
    <Box
      sx={{
        py: 3,
        px: 2,
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        mx: 'auto',
        gap: 4,
        margin: 4

      }}
    >


      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'left', width: '100%', }}>
        <h3 >Связаться со мной:</h3>
        <p> Почта: <a className={`p-4 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded`} href="mailto:lialia1986@mail.ru">lialia1986@mail.ru</a></p>
        <p>Телеграм:  <a className={`p-4 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded`} href="https://t.me/lyamurka22" target="_blank"> https://t.me/lyamurka22  </a></p>
      </Box>



      <Typography variant="body2" color="text.secondary">
        © 2025 Александрова Е.Ю. Все права защищены
      </Typography>
    </Box>

  </>;
}