import Itemlist from "./Itemlist";
function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
      {/* {} expresstion hota h  */}
      {items.length ? (
        <Itemlist
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ fontSize: "20px" }}>item list is empty</p>
      )}
    </>
  );
}

export default Content;
