import video from '../video.mp4'

function Header() {
  return (
    <header>
      <video src={video} loop autoPlay muted></video>
      <h1>WE ARE ATHUL COLORS</h1>
      <div className="row">
        {/* <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button> */}
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
