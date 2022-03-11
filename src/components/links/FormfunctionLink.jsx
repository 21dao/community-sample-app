export default function FormfunctionLink(props) {
  const url = props.url;

  if (url === null) return <></>;

  return (
    <p className="formfunction" style={props.style}>
      <a href={url} title="" target="_blank" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="21"
          viewBox="0 0 48 42"
          fill="none"
          className="formfunction-svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9383 0C5.79269 0 0 5.78167 0 12.9137V40.8935C0 41.1787 0.231708 41.41 0.517534 41.41H0.862556C8.0082 41.41 13.8009 35.6283 13.8009 28.4963V0.516549C13.8009 0.231267 13.5692 0 13.2834 0H12.9383ZM29.7582 0C22.6125 0 16.8198 5.78167 16.8198 12.9137V40.8935C16.8198 41.1787 17.0516 41.41 17.3374 41.41H17.6824C24.828 41.41 30.6207 35.6283 30.6207 28.4963V0.516549C30.6207 0.231267 30.389 0 30.1032 0H29.7582ZM33.6397 1.0331C33.6397 0.546091 33.6397 0.302587 33.7913 0.151294C33.9428 0 34.1868 0 34.6748 0H46.4055C46.8935 0 47.1374 0 47.289 0.151294C47.4406 0.302587 47.4406 0.546091 47.4406 1.0331V12.7415C47.4406 13.2285 47.4406 13.472 47.289 13.6233C47.1374 13.7746 46.8935 13.7746 46.4055 13.7746H34.6748C34.1868 13.7746 33.9428 13.7746 33.7913 13.6233C33.6397 13.472 33.6397 13.2285 33.6397 12.7415V1.0331ZM40.5401 16.7878C36.7291 16.7878 33.6397 19.8714 33.6397 23.6752C33.6397 27.4789 36.7291 30.5625 40.5401 30.5625C44.3511 30.5625 47.4406 27.4789 47.4406 23.6752C47.4406 19.8714 44.3511 16.7878 40.5401 16.7878Z"
            fill="#201F2A"
          />
        </svg>
        FormFunction
      </a>
    </p>
  );
}