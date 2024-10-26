

const UserCard = ({userInfo}) => {
    userInfo.phone = undefined;
    return (
        <div style={{
            width:'250px',
            // height:'300px',
            padding: '10px',
            boxShadow: '1px, 1px, 5px, black',
            border: '1px black solid',
         }}>
            <img style={{ width: '200px', height: '150px', objectFit: 'cover'}} alt="" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1729296000&semt=ais_hybrid"/>
            <h1>{userInfo.name}</h1>
            <p>{userInfo.username}</p>
            <p>{userInfo.phone}</p>
        </div>
    )
}

export default UserCard
