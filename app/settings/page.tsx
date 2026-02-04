'use client'

import { useAuth } from '@/lib/auth-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SettingsPage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <main className="bg-white min-h-screen pt-20 px-4">
      <div className="max-w-2xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-12">settings</h1>

        {/* Account Settings */}
        <div className="border border-black p-6 mb-6">
          <h2 className="font-bold text-lg mb-4">account</h2>
          <div className="space-y-4 text-sm">
            <div>
              <p className="text-gray-600 mb-1">email</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">role</p>
              <p className="font-medium capitalize">{user?.role}</p>
            </div>
            <Link
              href="/member/edit-profile"
              className="block border-t border-gray-300 pt-4 text-sm border-b border-black hover:opacity-60 w-fit"
            >
              edit profile
            </Link>
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="border border-black p-6 mb-6">
          <h2 className="font-bold text-lg mb-4">privacy</h2>
          <div className="space-y-4 text-sm">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 border border-black" defaultChecked />
              <span>show profile on leaderboard</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 border border-black" defaultChecked />
              <span>show contribution stats</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 border border-black" />
              <span>make profile private</span>
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div className="border border-black p-6 mb-6">
          <h2 className="font-bold text-lg mb-4">notifications</h2>
          <div className="space-y-4 text-sm">
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 border border-black" defaultChecked />
              <span>event announcements</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 border border-black" defaultChecked />
              <span>community updates</span>
            </label>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 border border-black" defaultChecked />
              <span>application status</span>
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="border border-red-600 p-6 bg-red-50">
          <h2 className="font-bold text-lg mb-4 text-red-900">danger zone</h2>
          <button
            onClick={handleLogout}
            className="w-full border border-red-600 text-red-600 px-4 py-2 text-sm font-medium hover:bg-red-100 transition"
          >
            logout
          </button>
        </div>
      </div>
    </main>
  )
}
