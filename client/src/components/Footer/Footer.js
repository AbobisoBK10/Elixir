import { Container } from "@mui/system";
import { Grid, Box, Link } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



function Footer() {


  return (


    <footer  >
        <Box px={{ xs:3 , sm:10 }} py={{ xs: 5 , sm:10 }} bgcolor="#2a2a2a" color="white" margintop="10px" >
            <Container maxWidth="lg" >
                <h3 >About Us</h3>
                <Grid container spacing={5}>
                    
                    <Grid item xs={12} sm={6}>
                        <Box borderRight={1}>
                            Elixir Perfume is professionally made in Lebenon.
                            The secret behind the intensity and long-lasting effect of
                            Elixir, is the high-quality French ingredients used for perlume composition.
                            With Elixir's wide collection, the target is every season and occa-sion. Elixir creates men's, women's and unisex fragrances.
                            Our fragrances start with the aroma, flirt with your
                            memories, and Find a place to setile down in your heart
                            </Box>
                        

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box >
                        Elixir Perfume يصنع بخبرة في لبنان. السر خلف كثرة وتأثير طويل الأمد ل Elixir هو استخدام مكونات فرنسية عالية الجودة لتصنيع العطور.
                        مع مجموعة واسعة ل Elixir، الهدف هو كل موسم ومناسبة. 
                        Elixir يخلق عطور للرجال والنساء والجنسين. 
                        عطورنا يبدأون بالنبات، يغتنمون ذكرياتك، ويجدون مكاناً للتوأثر في قلبك.
                        </Box>
                        

                    </Grid>


                </Grid>
            <Box textAlign="center" pt={{xs:5 , sm:10}} pb={{xs:5 , sm:0}}>
                <MailOutlineIcon/>
                <Link href="https://www.facebook.com/Elixirlebanon?mibextid=LQQJ4d" target="_blank" color="inherit">
                    <FacebookIcon/>
                </Link>
                <Link href="https://www.instagram.com/elixir.perfumes.lb/" target="_blank" color="inherit">
                    <InstagramIcon/>
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=%2B96178808281&fbclid=IwAR1iiqoL_RBi9DdbliE4_E9ASPKMSZjWQ75fGQiQM8Edz7gZDDLh2eAqiCk" target="_blank" color="inherit">
                    <WhatsAppIcon/>
                </Link>
            </Box>

            <Box textAlign="center" >
                Elixir &reg; {new Date().getFullYear()}
            </Box>

            
            </Container>


        </Box>
    </footer>
  )
}

export default Footer;
