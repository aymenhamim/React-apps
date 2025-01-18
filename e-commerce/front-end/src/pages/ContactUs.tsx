import Button from '../components/Button';

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
    </div>
  );
};

export default ContactUs;
