import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Layout from '@/components/layout/Layout'
import { FileQuestion } from 'lucide-react'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-20">
        <div className="bg-primary/10 p-6 rounded-full mb-6">
          <FileQuestion className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">404 - Seite nicht gefunden</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Button onClick={() => navigate('/')} size="lg">
          Zurück zur Startseite
        </Button>
      </div>
    </Layout>
  )
}

export default NotFoundPage