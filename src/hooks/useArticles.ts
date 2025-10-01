useEffect(() => {
  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("fecha_publicacion", { ascending: false });

    if (!error && data) {
      setArticles(data);
    }
  };

  fetchArticles();
}, []);
