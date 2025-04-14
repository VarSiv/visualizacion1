<!-- Footer.svelte -->
<script>
    const currentYear = 2025;
  </script>
  
  <footer class="footer">
    <div class="left">
      © Varvara Mironov {currentYear}
    </div>
    <div class="right">
      <a href="https://github.com/VarSiv/" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/varvara-mironov/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </footer>
  
  <style>
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #5a5a5a;
      padding: 2rem 0;
      font-size: 0.9rem;
      color: #bbbbbb;
    }
  
    .right a {
      margin-left: 1rem;
      text-decoration: none;
      color: #bbbbbb;
    }
  
    .right a:hover {
      text-decoration: underline;
      color: #ffffff;
    }
  </style>
  
  