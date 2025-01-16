function TableOfPeople() {
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
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((c) => (
                        <tr>
                            <td>{c.name}</td>
                            <td>{c.age}</td>
                            <td>{c.occupation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableOfPeople;