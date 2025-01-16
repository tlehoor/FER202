function PeopleList() {
  const people = [
    { name: "Thành", age: 21 , occupation: "SinhVien"},
    { name: "Sơn", age: 17, occupation: "HocSinh"},
    { name: "Khang", age: 18, occupation: "HocSinh"},
    { name: "Nguyên", age: 21 , occupation: "SinhVien"},
    { name: "Lợi", age: 23 , occupation: "NhanVien"},
    { name: "Hiếu", age: 19, occupation: "HocSinh"},
    { name: "An", age: 16, occupation: "HocSinh"},
    { name: "Mạnh", age: 19, occupation: "HocSinh"},
    { name: "Bình", age: 22 , occupation: "NhanVien"},
];
  return (
    <div>
      {people.map((person, index) => {
        return (
          <div id={index}>
            <ul>
              <li>Name is {person.name}, Age is {person.age}</li>
            </ul>
          </div>
        )
      })}

    </div>
  );
}

export default PeopleList;