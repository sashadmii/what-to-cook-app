import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export type FormValues = {
  author: string;
  title: string;
  cuisine: string;
  instructions: string;
  file: string;
  email: string;
};

const initialValues: FormValues = {
  author: '',
  title: '',
  cuisine: '',
  instructions: '',
  file: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  title: Yup.string().min(3).required('This field is required'),
  author: Yup.string()
    .min(3, 'Username must be at least 3 characters long')
    .required('This field is required'),
  cuisine: Yup.string(),
  instructions: Yup.string().min(3).required('This field is required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(/^(?!.*@[^,]*,)/, 'Invalid email')
    .required('This field is required'),
});

const onSubmit = (values: FormValues): void => {
  localStorage.setItem('New Recipe', JSON.stringify(values));
};

function CreateRecipeForm(): JSX.Element {
  return (
    <div className="flex flex-col w-full items-center mt-10">
      <h3 className="font-serifFont text-3xl w-9/12">Add your recipe</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form className="flex justify-self-center flex-col w-9/12 mt-5 p-5 border rounded-md">
          <label htmlFor="image">Add image</label>
          <Field id="file" name="file" type="file" accept="image/*" />

          <Field
            type="text"
            id="author"
            name="author"
            placeholder="Enter author's name"
            className="mt-4 outline outline-1 p-1 pl-2 rounded-sm outline-cocoa bg-sand placeholder-cocoaLight"
          />
          <ErrorMessage
            className="text-[#E30B5C]"
            name="author"
            component="div"
          />

          <Field
            type="text"
            id="title"
            name="title"
            placeholder="Enter recipe title"
            className="mt-4 outline outline-1 p-1 pl-2 rounded-sm outline-cocoa bg-sand placeholder-cocoaLight"
          />
          <ErrorMessage
            className="text-[#E30B5C]"
            name="title"
            component="div"
          />

          <Field
            type="text"
            id="cuisine"
            name="cuisine"
            placeholder="Enter cuisine type"
            className="mt-4 outline outline-1 p-1 pl-2 rounded-sm outline-cocoa bg-sand placeholder-cocoaLight"
          />

          <Field
            as="textarea"
            id="instructions"
            name="instructions"
            placeholder="Recipe instructions"
            className="mt-4 outline outline-1 p-1 pl-2 rounded-sm outline-cocoa bg-sand placeholder-cocoaLight"
          />
          <ErrorMessage
            className="text-[#E30B5C]"
            name="instructions"
            component="div"
          />

          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
            className="mt-4 outline outline-1 p-1 pl-2 rounded-sm outline-cocoa bg-sand placeholder-cocoaLight"
          />
          <ErrorMessage
            className="text-[#E30B5C]"
            name="email"
            component="div"
          />

          <button
            type="submit"
            className="bg-plaster pt-3 pb-3 pl-5 pr-5 rounded-full w-40 mt-5 
        hover:scale-110 hover:bg-cocoa hover:text-plaster transition ease-in-out 
        duration-500 cursor-pointer self-end">
            Add recipe
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateRecipeForm;
