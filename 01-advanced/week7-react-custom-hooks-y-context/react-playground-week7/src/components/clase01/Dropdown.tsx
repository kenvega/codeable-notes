const Dropdown() {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef(null);

// Checks if there is a click done outside the dropdown element
  React.useEffect(() => {
    function handleClick(event) {
      if (!ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div ref={ref}>
      // ...
    </div>
  )
}