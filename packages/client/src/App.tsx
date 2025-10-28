import { Button } from "components";

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Selamat Datang di Web Client</h1>

      {/* Ini adalah komponen kustom Anda. 
          Ini akan tampil sebagai tombol biru 'primary' */}
      <Button onClick={() => alert('Clicked!')}>
        Tombol dari components
      </Button>

      {/* Anda masih bisa menimpa default-nya */}
      <Button type="dashed" style={{ marginLeft: 8 }}>
        Tombol Dashed
      </Button>
    </div>
  );
}

export default App;