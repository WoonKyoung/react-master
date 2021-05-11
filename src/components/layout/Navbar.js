import styled from "styled-components";

const StyleNav = styled.nav`
  @media  {
    position: relative;
    margin-left: ${(p) => p.visible ? 0 : '-15rem' };
    transition: margin 0.25s ease-out;
  }
`;

const links = [
    {
        to: "/",
        icon: "fas fa-box",
        label: "book"
    },
    {
        to: "/orders",
        icon: "fas fa-clipboard",
        label: "Customer Orders"
    },
    {
        to: "/subs",
        icon: "fas fa-redo-alt",
        label: "Subscriptions"
    },
    {
        to: "/overview",
        icon: "fas fa-robot",
        label: "Overview"
    },
    {
        to: "/schedule",
        icon: "fas fa-calendar",
        label: "Schedule"
    }
];


function Navbar(props) {
  return (
      <>
    <StyleNav visible = {props.visible}>
        <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">React practice</div>
            <div className="list-group list-group-flush">
                {links.map((i) => (
                    <a className="list-group-item list-group-item-action bg-light"
                       href={i.to}
                       key={i.to}
                       label={i.label}>
                        {i.label}
                    </a>
                ))}
            </div>
        </div>
    </StyleNav>
      </>
  );
}

export default Navbar;
