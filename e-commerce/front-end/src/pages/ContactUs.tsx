import Button from '../components/Button';

const ContactUs: React.FC = () => {
  return (
    <div>
      ContactUs
      <br />
      <Button variant={'primary'}>dklqhsfh</Button>
      <Button className="mx-3 bg-red-500">Delete</Button>
      <Button>Test</Button>
      <Button className="mx-3 bg-amber-500">hello</Button>
      <Button className="bg-zinc selection:-500 mx-3">Button</Button>
    </div>
  );
};

export default ContactUs;
