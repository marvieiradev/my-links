interface PreviewProps {
  image: string;
  title: string;
  description: string;
}

const Preview = (props: PreviewProps) => {
  return (
    <>
      <h1 className="text-xl mb-2 text-center">Preview</h1>
      <div className=" flex flex-col gap-8 justify-center items-center bg-white rounded-3xl border-6 border-black min-w-[200px]">
        <div className="p-2 flex flex-col justify-center items-center gap-2 w-full moblie">
          <div className="p-1 px-4 border text-black border-indigo-500 rounded-full w-full m-4">
            https://my-links/meu-link
          </div>
          <img
            className="w-[100px] h-[100px] rounded-full mt-2"
            src={props.image}
            alt="user"
          />
          <p className="text-xl text-center text-black">{props.title}</p>
          <p className="text-md text-center text-black">{props.description}</p>
          <div className="w-full flex flex-col gap-2 mb-2 p-4 md:gap-4">
            <div className="p-2 px-4 bg-indigo-500 rounded-full text-center">
              Links Teste 1
            </div>
            <div className="p-2 px-4 bg-indigo-500 rounded-full text-center">
              Links Teste 2
            </div>
            <div className="p-2 px-4 bg-indigo-500 rounded-full text-center">
              Links Teste 3
            </div>
            <div className="p-2 px-4 bg-indigo-500 rounded-full text-center">
              Links Teste 4
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preview;
