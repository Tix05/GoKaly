const HMenu = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="hover:text-blue-200">Accueil</a>
          </li>
          <li>
            <a href="/profile" className="hover:text-blue-200">Profil</a>
          </li>
          <li>
            <a href="/orders" className="hover:text-blue-200">Mes Commandes</a>
          </li>
          <li>
            <a href="/settings" className="hover:text-blue-200">Paramètres</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HMenu
