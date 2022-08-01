import './Contact.css';
import { ReactComponent as LinkedIn } from './images/LinkedIn.svg';
import { ReactComponent as Twitter } from './images/Twitter.svg';
import { ReactComponent as Github } from './images/Github.svg';
import { ReactComponent as Medium } from './images/Medium.svg';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  
  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };
  
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message
      };
//       emailjs.sendForm('service_vlr2okj', 'template_gc9cjno', formData.current, 'aRM1TpD8f996CJE8p')

      await emailjs.send(
        'service_vlr2okj',
        'template_gc9cjno',
        templateParams,
        'aRM1TpD8f996CJE8p'
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='frontpage bg-dark contact'  id="Contact">

<div className='ContactForm'>
      <div className='container'>
      <div className='col-12 text-center copyright mt-5'>
           {/* <h1 className="main-color">
           Connect with me 
           </h1> */}
           <h1 className='section-title'>
              <span className='main-color'>Connect with me </span>
            </h1>
           
               <span className='icons'>
                   <a href="https://www.linkedin.com/in/saurabhghuge/">
                       <LinkedIn className='icon' />
                   </a>
               </span>
               <span className='icons'>
                   <a href="https://github.com/saurabhghuge">
                       <Github className='icon' />
                   </a>
               </span>
               <span className='icons'>
                   <a href="https://medium.com/@saurabhghuge/">
                       <Medium className='icon' />
                   </a>
               </span>
               <span className='icons'>
                   <a href="https://twitter.com/SaurabhGhuge16">
                       <Twitter className='icon' />
                   </a>
               </span>

           </div>
        {/* Row 1 */}
        <div className='row'>
          <div className='col-12'>
            <h1 className='section-title'>
              <span className='main-color'>Contact  Me</span>
            </h1>
          </div>
        </div>
        {/* Row 2 */}
        <div className='row'>
          <div className='col-lg-4'>
            <div className='contact-info'>
              <div className='phone-info'>
                {/* <FontAwesomeIcon
                  icon={faPhone}
                  className='contact-icon'
                  fixedWidth
                ></FontAwesomeIcon> */}
                <span>Give me a call:</span>
                <p>+91 8108381738</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='contact-info'>
              <div className='email-info'>
                {/* <FontAwesomeIcon
                  icon={faEnvelope}
                  className='contact-icon'
                  fixedWidth
                ></FontAwesomeIcon> */}
                <span>Send me an email:</span>
                <p>itsgsaurabh@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='contact-info'>
              <div className='location-info'>
                {/* <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className='contact-icon'
                  fixedWidth
                ></FontAwesomeIcon> */}
                <span>Currently located:</span>
                <p>Mumbai,India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className='Contact container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' className='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                {/* <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div> */}
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <button className='submit-btn' type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>

      <div className='Footer'>
      <div className='col-12 text-center purple copyright mt-5'>
        <p>Copyright &copy; {new Date().getFullYear()} Saurabh Ghuge</p>
      </div>


           
    </div>
    </div>
  );
};

export default Contact;