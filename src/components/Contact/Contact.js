import './Contact.css'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import {
    FormEvent,
    memo,
    useRef,
    useState,
    SyntheticEvent,
    MouseEvent,
  } from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  Hidden,
  useTheme,
  Snackbar,
  IconButton,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, createStyles,  } from "@material-ui/core/styles";
import { ReactComponent as LinkedIn } from './images/LinkedIn.svg';
import { ReactComponent as Twitter } from './images/Twitter.svg';
import { ReactComponent as Instagram } from './images/Instagram.svg';
import { ReactComponent as Facebook } from './images/Facebook.svg';

  const styles = {
  

    root: {
        // backgroundColor: theme.palette.type === "dark" ? "#091c34" : "#ccff90",
        // paddingBottom: theme.spacing(5),
      },
      wave: {
        width: "100%",
        // height: theme.spacing(50),
        // [theme.breakpoints.down("md")]: {
        //   height: theme.spacing(25),
        // },
      },
      left: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      leftContainer: {
        flexGrow: 1,
      },
      iconsGrid: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // paddingTop: theme.spacing(5),
        // paddingBottom: theme.spacing(5),
      },
      icon: {
        // marginRight: theme.spacing(2),
      },
      socialItem: {
        display: "flex",
        alignItems: "center",
        // marginTop: theme.spacing(1),
        // marginBottom: theme.spacing(1),
        "&:hover": {
          textDecoration: "none",
          // color: theme.palette.secondary.light,
        },
      },
      illustrationContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      illustration: {
        width: "80%",
      },
      sendButton: {
        // marginTop: theme.spacing(2),
      },
}


const Contact = () => {
    // const [open, setOpen] = useState(false);
    // const [message, setMessage] = useState("Message Sent");
    // const classes = useStyles();
    // const theme = usetheme();
    // const nameRef = useRef<HTMLInputElement>(null!);
    // const emailRef = useRef<HTMLInputElement>(null!);
    // const messageRef = useRef<HTMLInputElement>(null!);
  
    // const handleClick = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = (
    //   _event= SyntheticEvent | MouseEvent,
    //   reason = string
    // ) => {
    //   if (reason === "clickaway") {
    //     return;
    //   }
    //   setOpen(false);
    // };
  
    // const handleFormSubmit = (e=FormEvent<HTMLFormElement>) => {
    //   e.preventDefault();
    //   const formData = new FormData();
    //   formData.append("name", nameRef.current.value);
    //   formData.append("email", emailRef.current.value);
    //   formData.append("message", messageRef.current.value);
    //   const url= RequestInfo = process.env.NEXT_PUBLIC_FORMSPREE_URL;
    //   fetch(url, {
    //     method: "POST",
    //     body: formData,
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   })
    //     .then((res) => {
    //       if (!res.ok) {
    //         throw new Error(`Status Code Error ${res.status}`);
    //       }
    //       return res.json();
    //     })
    //     .then((_data) => {
    //       setOpen(true);
    //       nameRef.current.value = "";
    //       emailRef.current.value = "";
    //       messageRef.current.value = "";
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       setMessage("Error sending message");
    //       setOpen(true);
    //     });
    // };

    return (


      <div className="contact " id="Contact">
      <Container>
         <Grid container>

          <Grid item md={6} sm={12}>
              <Typography variant="h3" align="left">
                Say Hi
              </Typography>
              <form onSubmit="">
                <TextField
                  label="Name"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  color="secondary"
                  inputRef=""
                  required
                  id="form-name"
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  color="secondary"
                  inputRef=""
                  required
                  placeholder="So I can get back to you"
                  id="form-email"
                />
                <TextField
                  label="Message"
                  fullWidth
                  margin="dense"
                  multiline
                  rows={5}
                  variant="outlined"
                  color="secondary"
                  inputRef=""
                  required
                  id="form-message"
                />
                <Button
                  variant="outlined"
                  className=""
                  color="secondary"
                  endIcon={<SendIcon />}
                  type="submit"
                >
                  send
                </Button>
              </form>
              
            </Grid>
            <Grid item md={6} sm={12}>
            <br></br>
          <h1 className="text-start text-light">
          Connect with me 
          </h1>
          <br></br>
          <div>
              <span className='icons'>
                  <a href="">
                      <LinkedIn className='icon' />
                  </a>
              </span>
              <span className='icons'>
                  <a href="">
                      <Twitter className='icon' />
                  </a>
              </span>
              <span className='icons'>
                  <a href="">
                      <Instagram className='icon' />
                  </a>
              </span>
              <span className='icons'>
                  <a href="">
                      <Facebook className='icon' />
                  </a>
              </span>
          </div>

              </Grid>
              </Grid>

          <br></br>
          <br></br>
      </Container>
  </div>


      //   <footer className={styles.root} id = "Contact">
      //   <img
      //     className={styles.wave}
      //     src=""
      //     alt="wave for styling and separating sections"
      //   />
      //   <Container id="contact">
      //     <Grid container>
      //       <Grid item md={6} sm={12}>
      //         <Typography variant="h3" align="left">
      //           Connect with me
      //         </Typography>
      //         <article
      //           itemScope
      //           itemType="http://schema.org/Author"
      //           className={styles.left}
      //         >
      //           <Grid container className={styles.leftContainer}>
      //             <Grid item md={6} sm={6} className={styles.iconsGrid}>
      //               <Link
      //                 className={styles.socialItem}
      //                 href=""
      //                 target="_blank"
      //                 rel="noopener noreferrer"
      //                 color="inherit"
      //               >
      //                 <GitHubIcon className={styles.icon} fontSize="large" />
  
      //                 <Typography>Github</Typography>
      //               </Link>
  
      //               <Link
      //                 className={styles.socialItem}
      //                 href=""
      //                 target="_blank"
      //                 rel="noopener noreferrer"
      //                 color="inherit"
      //               >
      //                 <LinkedInIcon className={styles.icon} fontSize="large" />
  
      //                 <Typography>LinkedIn</Typography>
      //               </Link>
  
      //               <Link
      //                 className={styles.socialItem}
      //                 href=""
      //                 target="_blank"
      //                 rel="noopener noreferrer"
      //                 color="inherit"
      //               >
      //                 <TwitterIcon className={styles.icon} fontSize="large" />
  
      //                 <Typography>Twitter</Typography>
      //               </Link>
  
      //               <Link
      //                 className={styles.socialItem}
      //                 href="mailto:"
      //                 target="_blank"
      //                 rel="noopener noreferrer"
      //                 color="inherit"
      //               >
      //                 <MailIcon fontSize="large" className={styles.icon} />
      //                 <Typography>itsgsaurabh@gmail.com</Typography>
      //               </Link>
      //             </Grid>
  
      //             <Grid
      //               item
      //               md={6}
      //               sm={6}
      //               className={styles.illustrationContainer}
      //             >
      //               <Hidden xsDown>
      //                 <img
      //                   src="/assets/message.svg"
      //                   className={styles.illustration}
      //                   alt="message illustration"
      //                 />
      //               </Hidden>
      //             </Grid>
      //           </Grid>
      //         </article>
      //       </Grid>
            // <Grid item md={6} sm={12}>
            //   <Typography variant="h3" align="left">
            //     Say Hi
            //   </Typography>
            //   <form onSubmit="">
            //     <TextField
            //       label="Name"
            //       fullWidth
            //       margin="dense"
            //       variant="outlined"
            //       color="secondary"
            //       inputRef=""
            //       required
            //       id="form-name"
            //     />
            //     <TextField
            //       label="Email"
            //       type="email"
            //       fullWidth
            //       margin="dense"
            //       variant="outlined"
            //       color="secondary"
            //       inputRef=""
            //       required
            //       placeholder="So I can get back to you"
            //       id="form-email"
            //     />
            //     <TextField
            //       label="Message"
            //       fullWidth
            //       margin="dense"
            //       multiline
            //       rows={5}
            //       variant="outlined"
            //       color="secondary"
            //       inputRef=""
            //       required
            //       id="form-message"
            //     />
            //     <Button
            //       variant="outlined"
            //       className=""
            //       color="secondary"
            //       endIcon={<SendIcon />}
            //       type="submit"
            //     >
            //       send
            //     </Button>
            //   </form>
            //   {/* <Snackbar
            //     anchorOrigin={{
            //       vertical: "bottom",
            //       horizontal: "left",
            //     }}
            //     open={open}
            //     autoHideDuration={6000}
            //     onClose={handleClose}
            //     message={message}
            //     action={
            //       <>
            //         <IconButton
            //           size="small"
            //           aria-label="close"
            //           color="inherit"
            //           onClick={handleClose}
            //         >
            //           <CloseIcon fontSize="small" />
            //         </IconButton>
            //       </>
            //     }
            //   />  */}
            // </Grid>
      //     </Grid>
      //   </Container>
      // </footer>
    );
}

export default Contact;