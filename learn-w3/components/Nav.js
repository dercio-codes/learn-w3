import { Home } from "@mui/icons-material";
export default function Nav() {
  return (
    <div
      style={{
        height: "8vh",
        background: "black",
        position: "sticky",
        top: "0",
        display: "flex",
        color:'#eee'
      }}
    >
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          minWidth: "100px",
        }}>
        <Home />
        Home
        </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100px",
        }}
      >
        Team
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100px",
        //   background: "purple",
        }}
      >
        Work
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100px",
        }}
      >
        Price
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "100px",
        }}
      >
        Contatc
      </div>
    </div>
  );
}
