import './contact.css';
import ContactForm from '../components/contactForm';

export default function Contacts () {
  return (
    <div className='Section fCol' id='contacts'>
      <h1 className='Headers fRow'><span className='Logo-form'>Contacts</span></h1>
      <div className='Contents Contact fCol'>
        <h1 className='Headers fCol'>Send me a message ?</h1>
        <ContactForm />
      </div>
    </div>
  );
}
