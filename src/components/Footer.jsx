// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-background text-muted-foreground border-t border-border px-6 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-primary mb-2">AlgoMation</h3>
          <p>Visualize, learn, and master algorithms with clarity and style.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-primary">Home</a></li>
            <li><a href="#" className="hover:text-primary">Features</a></li>
            <li><a href="#" className="hover:text-primary">Contact</a></li>
            <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-primary">GitHub</a></li>
            <li><a href="#" className="hover:text-primary">YouTube</a></li>
            <li><a href="#" className="hover:text-primary">Discord</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} AlgoMation. All rights reserved.
      </div>
    </footer>
  );
}