import Image from "next/image";

const Input1 = ({
  placeholder,
  urlImg,
  searchEffect,
  onClickEffect,
  onChangeEffect,
  onBlurEffect,
  inputRef,
  invert,
  suggestionArray,
}) => {
  if (invert) {
    return (
      <div className="flex h-12 w-[20rem] min-w-52 rounded-2xl px-8">
        <input
          type="text"
          className={`${suggestionArray?.length ? "" : "rounded-s-2xl"} w-full overflow-hidden bg-gray-400 bg-opacity-60 pl-4`}
          ref={inputRef}
          placeholder={placeholder}
          onChange={onChangeEffect}
          onClick={onClickEffect}
          onBlur={onBlurEffect}
        />
        <Image
          src={urlImg}
          alt="search image"
          width={50}
          height={50}
          className={`${suggestionArray?.length ? "" : "rounded-e-2xl"} cursor-pointer overflow-hidden bg-gray-400 bg-opacity-60 p-3`}
          onClick={searchEffect}
        />
      </div>
    );
  } else {
    return (
      <div className="flex h-12 w-[50%] min-w-52 rounded-2xl">
        <Image
          src={urlImg}
          alt="search image"
          width={50}
          height={50}
          className={`${suggestionArray.length != 0 ? "rounded-tl-2xl" : "rounded-s-2xl"} w-14 cursor-pointer overflow-hidden bg-gray-400 bg-opacity-60 p-3`}
          onClick={searchEffect}
        />
        <input
          type="text"
          className={`${suggestionArray.length != 0 ? "rounded-tr-2xl" : "rounded-e-2xl"} w-full overflow-hidden bg-gray-400 bg-opacity-60 pl-2 placeholder:text-biancoTro`}
          ref={inputRef}
          placeholder={placeholder}
          onChange={onChangeEffect}
          onClick={onClickEffect}
          onBlur={onBlurEffect}
        />
      </div>
    );
  }
};

export default Input1;
