import Button from '../components/Button';
import Input from '../components/Input';

const ContactUs: React.FC = () => {
  return (
    <div>
      ContactUs
      <br />
      <Button variant={'primary'}>Primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="delete">delete</Button>
      <br /> <br />
      <Button size={'sm'}>small</Button>
      <Button size={'md'}>Meduim</Button>
      <Button size={'lg'}>Large</Button>
      <Button size={'xl'}>X-large</Button>
      <Button size={'full'} rounded="pill">
        X-large
      </Button>
      <br />
      <br />
      <Button rounded="none">None</Button>
      <Button rounded="smooth">smooth</Button>
      <Button rounded="pill">pill</Button>
      <br />
      <br />
      <Input inputType="text" />
      <Input inputType="password" />
      <Input inputType="email" />
      <br />
      <br />
      <Input rounded="pill" inputType="text" className="my-6" />
      <Input rounded="smooth" inputType="text" />
      <Input rounded="none" inputType="text" />
    </div>
  );
};

export default ContactUs;
