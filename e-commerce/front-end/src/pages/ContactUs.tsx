import { useState } from 'react';
import Button from '../components/Button';
// import IconButton from '../components/IconButton';
import Input from '../components/Input';

const ContactUs: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="mx-auto my-8 rounded-2xl bg-stone-50 px-16 py-6 shadow-lg">
      <form>
        <div className="my-2 flex w-full gap-4">
          <div>
            <label htmlFor="firstName" className="mb-1 block font-semibold">
              FirstName
            </label>
            <Input
              inputType="text"
              id="firstName"
              rounded="smooth"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="first name"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="mb-1 block font-semibold">
              LastName
            </label>
            <Input
              inputType="text"
              id="lastName"
              rounded="smooth"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="last name"
            />
          </div>
        </div>

        <div className="full my-2">
          <label htmlFor="email" className="mb-1 block font-semibold">
            Email
          </label>
          <Input
            inputType="email"
            rounded={'smooth'}
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="full my-2">
          <label htmlFor="phone" className="mb-1 block font-semibold">
            Phone
          </label>
          <Input
            inputType="tel"
            rounded={'smooth'}
            id="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="    "
          />
        </div>

        <div className="full my-2">
          <label htmlFor="message" className="mb-1 block font-semibold">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Leave your message here"
            className="w-full rounded-lg border border-stone-300 bg-stone-50 p-3 outline-none transition-all duration-300 focus:ring-4 focus:ring-stone-300"
            rows={5}
          />
        </div>
      </form>
      <Button size={'full'} rounded="pill">
        X-large
      </Button>
    </div>
  );
};

export default ContactUs;
