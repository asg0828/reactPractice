import React from 'react'

export default function dropdown() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState(null);

  const loadList = () => {
    const list = [];

    for (let i = 0; i < 5; i ++) {
      list.push({
        label: String.fromCharCode(65 + i),
        value: i,
      })
    }

    setList(list);
    setValue(list[0].value);
  }

  const changeSelector = (value) => {
    setValue(value);
  }

  return (
    <>
      <Select
        value={value}
        options={list}
        onChange={changeSelector}
      />

      <button onClick={loadList}>API 요청</button>
    </>
  )
}
