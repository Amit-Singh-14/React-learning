import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setitems] = useState([]);
  const [search, setsearch] = useState("");
  const [newItem, setNewItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive exprected data");
        const listitem = await response.json();
        // setFetchError(null);
        setitems(listitem);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    // just ek sinario bana rahe ki data aane mai time lag ra to h laoding dekha rhe h
    setTimeout(() => {
      fetchItems();
    }, 1000);
  }, []);

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setitems(listItems);

    // ye object decide karega ki get krna post krna deleet jo bhi ho
    const postOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
    // console.log(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setitems(listItems);

    const myitem = listItems.filter((item) => item.id === id);

    const updateOption = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myitem[0].checked }),
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOption);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setitems(listItems);

    const deleteOption = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;

    const result = await apiRequest(reqUrl, deleteOption);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem(" ");
  };

  return (
    <div className="App">
      <Header title="amit singh" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setsearch={setsearch} />
      <main>
        {isLoading && <p>loading Items....</p>}
        {fetchError && (
          <p style={{ color: "red" }}>{`error : ${fetchError}`}</p>
        )}
        {!fetchError && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLocaleLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

// {} -> destructure
export default App;
