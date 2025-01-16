function Sort() {
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

    const sortedPeople = people.sort((a, b) => {
        if (a.occupation < b.occupation) return -1;
        if (a.occupation > b.occupation) return 1;
        return a.age - b.age;
    });

    return (
        <div>
            <h2>Sort by Occupation and Then by Age</h2>
            <ul>
                {sortedPeople.map((person, index) => (
                    <li key={index}>
                        {person.name} - {person.age} - {person.occupation}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sort;
