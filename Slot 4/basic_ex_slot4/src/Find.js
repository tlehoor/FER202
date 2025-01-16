function Find() {
    const people = [
        { name: "Thành", age: 21, occupation: "SinhVien" },
        { name: "Sơn", age: 17, occupation: "HocSinh" },
        { name: "Khang", age: 18, occupation: "HocSinh" },
        { name: "Nguyên", age: 21, occupation: "SinhVien" },
        { name: "Lợi", age: 23, occupation: "NhanVien" },
        { name: "Hiếu", age: 19, occupation: "HocSinh" },
        { name: "An", age: 16, occupation: "HocSinh" },
        { name: "Mạnh", age: 19, occupation: "HocSinh" },
        { name: "Bình", age: 22, occupation: "NhanVien" },
    ];

    const oldest = people.reduce((prev, current) => (current.age > prev.age ? current : prev), people[0]);

    const youngest = people.reduce((prev, current) => (current.age < prev.age ? current : prev), people[0]);
    
    return (
        <div>
            <h2>Oldest Person</h2>
            <p>Name: {oldest.name}</p>
            <p>Age: {oldest.age}</p>
            <p>Occupation: {oldest.occupation}</p>

            <h2>Youngest Person</h2>
            <p>Name: {youngest.name}</p>
            <p>Age: {youngest.age}</p>
            <p>Occupation: {youngest.occupation}</p>
        </div>
    );
}

export default Find;
